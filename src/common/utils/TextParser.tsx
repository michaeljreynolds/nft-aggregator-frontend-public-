import React, { useEffect, useState } from "react";

type TextParserProps = {
  children: string;
  contentFrom?: "twitter" | "discord";
  renderAs: "p" | "div";
  className?: string;
};

export default function TextParser({
  children,
  contentFrom,
  renderAs,
  className,
}: TextParserProps) {
  const [result, setResult] = useState("");

  const replaceLinks = (input: string) => {
    let res = input;
    const normalLinksReg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
    res = res.replace(normalLinksReg, "<a href='$1$2' target='_blank' rel='noreferrer'>$1$2</a>");

    // replace [label](link) to <a href=link>label</a>
    const squareLinksReg = /\[(.*?)\]\(<a href='(.*?)?'.+?\)/g;
    res = res.replace(squareLinksReg, "<a href='$2' target='_blank' rel='noreferrer'>$1</a> ");
    return res;
  };

  const replaceBreaks = (input: string) => {
    return input.replace(/\n/g, "<br />");
  };

  const convertTwitterNameToLink = (input: string) => {
    const nameReg = /(@(\w+))/g;
    return input.replace(
      nameReg,
      "<a href='https://twitter.com/$2' target='_blank' rel='noreferrer'>$1</a>"
    );
  };

  const convertTwitterHashtagToLink = (input: string) => {
    const hashtagReg = /(#(\w+))/g;
    return input.replace(
      hashtagReg,
      "<a href='https://twitter.com/hashtag/$2?src=hashtag_click' target='_blank' rel='noreferrer'>$1</a>"
    );
  };

  useEffect(() => {
    let res = "";
    res = replaceBreaks(children);
    res = replaceLinks(res);
    if (contentFrom === "twitter") {
      res = convertTwitterNameToLink(res);
      res = convertTwitterHashtagToLink(res);
    }
    setResult(res);
  }, [children, contentFrom]);

  switch (renderAs) {
    case "p":
      return <p dangerouslySetInnerHTML={{ __html: result }} className={className}></p>;
    case "div":
      return <div dangerouslySetInnerHTML={{ __html: result }} className={className}></div>;
  }
}
