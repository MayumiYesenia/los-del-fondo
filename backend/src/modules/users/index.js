const app = require('./app');
const tracer = require('dd-trace').init({

service: 'mi_backend_service',
env: '<development>',
version: '1.0.0',
});

app.listen(app.get('port'), () => {
console.log(`Server on port ${app.get('port')}`);
});
