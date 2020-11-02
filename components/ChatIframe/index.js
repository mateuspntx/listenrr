import useDarkMode from 'use-dark-mode';

const ChatIframe = ({ radioId }) => {
  const darkMode = useDarkMode();

  return (
    <iframe
      title="youtube__chat"
      width="480"
      height="100%"
      src={`https://youtube.com/live_chat?v=${radioId}&embed_domain=${
        process.env.BASE_URL
      }&dark_theme=${darkMode.value ? 1 : 0}`}
      frameBorder="0"
    ></iframe>
  );
};

export default ChatIframe;
