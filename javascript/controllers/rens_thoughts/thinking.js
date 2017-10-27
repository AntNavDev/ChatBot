class Thinking {

    process_request( input )
    {
        var query_type = this.response_type( input, this.regex_list_request_type() );
        var my_response = '';
console.log('going to parse query_type: ' + query_type);
        // filter to query type
        switch( query_type )
        {
            case 'question':
                my_response = this.response_type( input, this.regex_list_question_responses() );
                break;
            case 'statement':
                my_response = this.response_type( input, this.regex_list_statement_responses() );
                break
            default:
                return this.i_dont_understand();
                break;
        }
console.log('going to parse my_response: ' + my_response);
        // filter to reply
        switch( my_response )
        {
            // Statements
            case 'greeting':
                return this.greeting();
                break;
            // Questions
            case 'name':
                var name_query = this.response_type( input, this.regex_list_name() );
                return this[ name_query ]();
                break;
            case 'i_dont_know':
                return this.i_dont_know();
                break;
            default:
                return this.i_dont_understand();
                break;
        }
    }

    regex_list_question_responses()
    {
        return {
            'name' : new RegExp(/[n](ame)/i),
            'i_dont_know' : new RegExp( /(\?)*$/i )
        };
    }

    regex_list_request_type()
    {
        return {
            'question' : new RegExp( /^[w](ill|hat|here|hy)|^[h](ow)|^[a](re)/i ),
            'statement' : new RegExp( /\.*$/i )
        };
    }

    regex_list_statement_responses()
    {
        return {
            'greeting' : new RegExp( /(^[H](i|ey|ello)|^[Y]o)/i )
        };
    }

    regex_list_name()
    {
        return {
            'my_name' : new RegExp( /[y](our)/i ),
            'your_name' : new RegExp( /[m](y)/i )
        };
    }

    response_type( query, arr )
    {
        for( var key in arr )
        {
            if( query.match( arr[ key ] ) )
            {
                return key;
            }
        }
    }

    greeting( name = '' )
    {
        if( name )
        {
            return 'Hi, ' + name;
        }
        else
        {
            return 'Hi, stranger!';
        }
    }

    my_name()
    {
        return 'My name is Ren!';
    }

    your_name()
    {
        return 'I don\'t have any information on other people\'s names...';
    }

    i_dont_know()
    {
        return 'I don\'t know how to answer that question...';
    }

    i_dont_understand()
    {
        return 'I don\'t understand that phrase...';
    }

}

module.exports = Thinking;
