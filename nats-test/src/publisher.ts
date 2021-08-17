import nats from 'node-nats-streaming';

const client = nats.connect('ticketing', 'abc', {
    url : 'http://localhost:4222'
});

client.on('connect', ()=> {
    console.log('publisher connected to nats')

    const data = {
        id: '123',
        title: 'concert',
        price: 20
    }

   const parsedData = JSON.stringify(data);
    client.publish('ticket:created', parsedData, () => {
        console.log('Event published')
    })
})