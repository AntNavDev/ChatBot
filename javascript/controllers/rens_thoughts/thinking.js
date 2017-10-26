class Thinking {
    process_request( input )
    {
        var greeting_regex = '([hH]i|ey|ello|[yY]o)';
        var is_greeting = input.match( greeting_regex );
        console.log( is_greeting );
        if( is_greeting )
        {
            return this.greeting();
        }
        else
        {
            return this.i_dont_understand();
        }
    }
    greeting()
    {
        return 'Hi!';
    }
    i_dont_understand()
    {
        return 'I don\'t understand that phrase...';
    }
}

module.exports = Thinking;
