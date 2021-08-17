import nats, {Message} from 'node-nats-streaming';


console.clear();
const stan = nats.connect(
    'ticketing', '123', {
        url : 'http://localhost:4222'
    }
)

stan.on('connect', () => {
    console.log('listening from NATS')
    const subscription = stan.subscribe('ticket:created');

    subscription.on('message', (data : Message) => {
        console.log(data.getData())
    })
})