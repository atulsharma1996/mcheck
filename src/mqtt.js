import mqtt from "mqtt";

const mqttBrokerHost = "mqtt-emqx.argenie.ai";
const mqttBrokerPort = 8084;
const mqttBrokerUser = "argenie";
const mqttBrokerPassword = "Kingfisher94108";

const mqttConnect = () => {
      const url = `mqtt://${mqttBrokerHost}:${mqttBrokerPort}/mqtt`;
      const options = {
        keepalive: 10,
        protocol: "mqtts",
        protocolVersion: 5,
        username: mqttBrokerUser,
        password: mqttBrokerPassword,
        clean: true,
        reconnectPeriod: 1000,
        connectTimeout: 30 * 1000,
        rejectUnauthorized: false,
      };
      options.clientId = "test-client-version-1";
      const client = mqtt.connect(url, options);
      if (client) {
        client.on("connect", () => {
          console.info("mqtt connected");
        });
        client.on("error", (err) => {
          console.error("mqtt connection error", err);
          client.end();
        });
        client.on("reconnect", () => {
          console.info("mqtt connection: reconnecting")
        });
        client.on("message", (topic, message) => {
          const strMessage = message.toString();
          console.info("mqtt message received for topic");
        });
      }
  };
  
  export { mqttConnect };