const Discord = require( 'discord.js' );
const client = new Discord.Client();

client.on( 'ready', () =>
{
  console.log( `Logged in as ${ client.user.tag }!` );
} );

const prefix = "ok thiccbot";

client.on( 'message', msg =>
{
  if ( msg.content.substr( 0, prefix.length ).toLowerCase() === prefix )
  {
    const split = msg.content.split( " " ).map( v => v.toLowerCase() );
    if ( split[ 2 ] === "lenny" && split[ 3 ] === "face" )
    {
      msg.channel.send( '( ͡° ͜ʖ ͡°)' );
    }
    else
    {
      msg.channel.send( 'hey bby gurl ;)' );
    msg.guild.roles.fetch().then(roles => console.log(roles.cache.array()));

    }
  }
} );

client.login( '' );