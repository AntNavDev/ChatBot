var express = require( 'express' );
var app = express();
var rens_thinking = require( './rens_thoughts/thinking' );

var bodyParser = require( 'body-parser' );
app.use( bodyParser.urlencoded( {
    extended: true
} ) );
app.use( bodyParser.json() );

var exphbs = require( 'express-handlebars' );
app.engine( 'handlebars', exphbs( { defaultLayout: '../../../views/layouts/body' } ) );
app.set( 'view engine', 'handlebars' );

// Add CSS
const path = require( 'path' );
app.use( '/', express.static( '../public' ) );

app.get( '/', function( request, response ) {
    response.render( '../../views/face' );
} );

app.post( '/', function( request, response ) {
    console.log( 'Ren heard something!' );
    var rens_brain = new rens_thinking();
    var rens_response = rens_brain.process_request( request.body.rens_ears );
    response.render( '../../views/face', { rens_response: rens_response }, function( error, html ) {
        if( error )
        {
            console.error( error );
        }
        response.send( html );
    } );
} );

app.listen( 8080 );

console.log( 'I think, therefore I am' );
