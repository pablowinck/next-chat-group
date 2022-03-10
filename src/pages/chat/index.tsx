import React from 'react';

const Chat: React.FC = () => {
   return <h1>redirect</h1>;
};

export async function getServerSideProps({ res, params }) {
   res.statusCode = 302;
   res.setHeader('Location', `/chat/1`); // Replace <link> with your url link
   return { props: {} };
}

export default Chat;
