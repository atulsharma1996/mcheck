// import mqtt from "mqtt";

// const mqttBrokerHost = "mqtt.argenie.ai";
// const mqttBrokerPort = 8084;
// const mqttBrokerUser = "argenie";
// const mqttBrokerPassword = "Kingfisher94108";

// const mqttConnect = () => {
//       const url = `mqtt://${mqttBrokerHost}:${mqttBrokerPort}/mqtt`;
//       const options = {
//         keepalive: 10,
//         protocol: "mqtts",
//         protocolVersion: 5,
//         username: mqttBrokerUser,
//         password: mqttBrokerPassword,
//         clean: true,
//         reconnectPeriod: 1000,
//         connectTimeout: 30 * 1000,
//         rejectUnauthorized: false,
//       };
//       options.clientId = "test-client-version-1";
//       const client = mqtt.connect(url, options);
//       if (client) {
//         client.on("connect", () => {
//           console.info("mqtt connected");
//         });
//         client.on("error", (err) => {
//           console.error("mqtt connection error", err);
//           client.end();
//         });
//         client.on("reconnect", () => {
//           console.info("mqtt connection: reconnecting")
//         });
//         client.on("message", (topic, message) => {
//           const strMessage = message.toString();
//           console.info("mqtt message received for topic");
//         });
//       }
//   };
  
//   export { mqttConnect };


import mqtt from "mqtt";

const mqttBrokerHost = "mqtt.argenie.ai";
const mqttBrokerPort = 8084;

const mqttConnect = () => {
  console.log("inside mqttConnect");
  const clientId = "emqx_react_" + Math.random().toString(16).substring(2, 8);
  const username = "argenie";
  const password = "Kingfisher94108";

  const url = `mqtt://${mqttBrokerHost}:${mqttBrokerPort}/mqtt`;
  console.log("url", url);
  const client = mqtt.connect(url, {
      clientId,
      keepalive: 10,
      protocol: 'wss',
      username: username,
      password: password
  });
      if (client) {
        client.on("connect", () => {
          console.info("mqtt connected");
          client.subscribe('test_topic')
          client.publish('test_topic', 'message 123')
        });
        client.on("error", (err) => {
          console.error("mqtt connection error", err);
          // client.end();
        });
        client.on("reconnect", () => {
          console.info("mqtt connection: reconnecting")
        });
        client.on("message", (topic, message) => {
          const strMessage = message.toString();
          console.info("mqtt message received for topic:", topic, strMessage);
        });
      }
  };
  
  export { mqttConnect };