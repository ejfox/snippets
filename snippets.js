function makeTribSnippet(element){
    
    //console.log("Snippet time!");
    
    
    if(element == undefined) {
        var element = "#snippet-1";
    }
    
    var codefile = $(element+' .code').text();
    var display_div = d3.select(element+' .example');
    var editor_div = d3.select(element+' .editor');
    $(element+' .code').hide();

    var tb = Tributary();
    var render = "svg";
    var config = new tb.Config({display: render});
    var model = new tb.CodeModel({code: codefile});

    var tribcont = new tb.TributaryContext({
    config: config,
    model: model,
    el: display_div.node()
    })
    tribcont.render();
    tribcont.execute();

    var editor = new tb.Editor({
    model: model,
    el: editor_div.node()
    });
    editor.render();
}

function getGithubToken() {
    var clientID = "d953facc306039cbcf88";
    var clientSecret = "57314b0d89bcca72822c3ee288e7b1a90c72eea2";
    
    // Do some fancy oAuth shit here, I dont understand it
}

function makeSnippets(snippet_array) {    

var github = new Github({
  username: "USER",
  password: "PASS",
  auth: "basic"
});

/*
var github = new Github({
  token: getGithubToken(),
  auth: "oauth"
});
*/

_.each(snippet_array, function(snippet, i){
    
    var gist = github.getGist(snippet);
    
    gist.read(function(err, gist) {
        //console.log("Err: ",err," Gist: ",gist);
        
        var snippet = gist.files['snippet.js'].content;
        var readme = gist.files['README'].content;
        
        var readme_firstline = readme.split('\n')[0];        
        //readme = readme.split('\n').splice(0,1).join('\n');
        
        var snippet_data = {
            i: i,
            gist_url: gist.html_url,
            name: readme_firstline,
            code: snippet,
            description: readme
        }
        
        var snippetHTML = ich.snippet(snippet_data);
        
        $('#snippets').append(snippetHTML);
        
        makeTribSnippet("#snippet-"+i)
        
        //console.log(readme, snippet)
    });
    
})
}