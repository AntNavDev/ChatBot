class Thinking {

    process_request( input )
    {
        var my_response = this.response_type( input, this.regex_list() );

        switch( my_response )
        {
            case 'greeting':
                return this.greeting();
                break;
            default:
                return this.i_dont_understand();
                break;
        }
    }

    regex_list()
    {
        return {
            'greeting' : new RegExp(/(^([H])(i|ey|ello)|^[Y]o$)/i)
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

    i_dont_understand()
    {
        return 'I don\'t understand that phrase...';
    }

}

module.exports = Thinking;
