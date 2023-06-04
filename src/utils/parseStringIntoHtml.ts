import { decode } from 'html-entities';
import HTMLReactParser, { domToReact } from 'html-react-parser';

export const parseStringIntoHtml = (
  htmlString: string,
): ReturnType<typeof domToReact> => {
  const parseNewLines = htmlString.replace(/\n/g, '<br />');
  const parseHtmlEntities = decode(parseNewLines);

  return HTMLReactParser(parseHtmlEntities);
};
