import nats, { Message } from "node-nats-streaming";

console.clear();
const stan = nats.connect("ticketing", "123", {
	url: "http://localhost:4222",
});

stan.on("connect", () => {
	console.log("listening from NATS");
	const options = stan
		.subscriptionOptions()
		.setManualAckMode(true)
		.setDeliverAllAvailable()
		.setDurableName("sample-listener");
	const subscription = stan.subscribe(
		"ticket:created",
		"queue-group-name",
		options
	);

	subscription.on("message", (data: Message) => {
		console.log(data.getData());
	});
});
