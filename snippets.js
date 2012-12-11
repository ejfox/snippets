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

snippet_array = [{
    "snippet.js": {
        "type": "application/javascript",
        "filename": "snippet.js",
        "size": 2245,
        "language": "JavaScript",
        "content": "vis = tributary.g\n \nvar width = 500,\n height = 300,\n padding = 80;\n\n// define the y scale (vertical)\nvar yScale = d3.scale.linear()\n .domain([0, 100]) // values between 0 and 100\n .range([height - padding, padding]); // map these to the chart height, less padding.\n\n// define the x scale (horizontal)\nvar mindate = new Date(2012,0,1),\n maxdate = new Date(2012,0,31);\n \nvar xScale = d3.time.scale()\n .domain([mindate, maxdate]) // values between for month of january\n\t.range([padding, width - padding * 2]); // map these the the chart width = total width minus padding at both sides\n \n\n// define the y axis\nvar yAxis = d3.svg.axis()\n .orient(\"left\")\n .ticks(5)\n .scale(yScale);\n\n\n// define the x axis\nvar xAxis = d3.svg.axis()\n .orient(\"bottom\")\n \t.ticks(4)\n .scale(xScale);\n\n// draw y axis with labels and move in from the size by the amount of padding\nvis.append(\"g\")\n .attr(\"class\", \"yaxis\")\n .attr(\"transform\", \"translate(\"+padding+\",0)\")\n .call(yAxis);\n\n// now add titles to the y axis\n vis.append(\"text\")\n .attr(\"class\", \"yaxis_label\")\n .attr(\"text-anchor\", \"middle\") // this makes it easy to centre the text as the transform is applied to the anchor\n .attr(\"transform\", \"translate(\"+ (padding/2) +\",\"+(height/2)+\")rotate(-90)\") // text is drawn off the screen top left, move down and out and rotate\n .text(\"Original Scale\");\n\n// draw x axis with labels and move to the bottom of the chart area\nvis.append(\"g\")\n .attr(\"class\", \"xaxis\") // give it a class so it can be used to select only xaxis labels below\n .attr(\"transform\", \"translate(0,\" + (height - padding) + \")\")\n .call(xAxis);\n \n// now rotate text on x axis\n// solution based on idea here: https://groups.google.com/forum/?fromgroups#!topic/d3-js/heOBPQF3sAY\n// first move the text left so no longer centered on the tick\n// then rotate up to get 45 degrees.\nvis.selectAll(\".xaxis text\") // select all the text elements for the xaxis\n .attr(\"transform\", function(d) {\n return \"translate(\" + this.getBBox().height*0.704 + \",\" + this.getBBox().height*0.5 + \")rotate(-45)\";\n})\n .attr(\"text-anchor\", \"end\");\n\n// From http://bl.ocks.org/3098488"
    },
    "README": {
        "type": "text/plain",
        "filename": "README",
        "size": 93,
        "language": null,
        "content": "# D3.svg.axis (x and y)\nAn example of both an X and Y axis using D3's built in axis function."
    }
},{
    "README": {
        "type": "text/plain",
        "filename": "README",
        "content": "# Color interpolation\nA simple example of color interpolation. I personally prefer HSL, but RGB is commented out if you'd like to us it instead. ",
        "language": null,
        "size": 145
    },
    "snippet.js": {
        "type": "application/javascript",
        "filename": "snippet.js",
        "content": "\nn = 66\nvar color = d3.scale.linear()\n .domain([0, n])\n .interpolate(d3.interpolateRgb)\n //.interpolate(d3.interpolateHsl)\n .range(['#D40067', '#278ECA'])\n \n// Example Code \nheight = 224 \ndata = d3.range(n);\nvar svg = tributary.g;\n \nsvg.selectAll(\"rect\")\n\t.data(data)\n .enter()\n .append(\"rect\")\n \t.attr({\n x: 0,\n\t y: function(d,i){\n \treturn i*((height/n)+1)\n },\n width: 390,\n height: height/n,\n fill: function(d,i){\n return color(i)\n },\n opacity: 1, \t \n })",
        "language": "JavaScript",
        "size": 542
    }
},{
    "README": {
        "type": "text/plain",
        "filename": "README",
        "content": "# This is the name of this snippet. Always just the first line. \n\nAnd this is the description. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
        "language": null,
        "size": 398
    },
    "snippet.js": {
        "type": "application/javascript",
        "filename": "snippet.js",
        "content": " \nvar svg = tributary.g; //d3.select(\"svg\");\n\nsvg.append(\"text\")\n .text(\"SVG!\")\n .attr({\n x: 10,\n y: 200,\n });\n\nsvg.append(\"circle\")\n .attr({\n cx: 216,\n cy: 100,\n r: 100,\n fill: \"#C02AB4\"\n })\n\nsvg.append(\"rect\")\n .attr({\n x: 263,\n y: 65,\n width: 100,\n height: 100,\n fill: \"#DA0DC1\"\n });\n ",
        "language": "JavaScript",
        "size": 362
    }
}]

    _.each(snippet_array, function(snippet, i){

        //var gist = github.getGist(snippet);

        //gist.read(function(err, gist) {
        var gist = []
        gist.files = snippet

            //$("body").prepend(JSON.stringify(gist.files));
            //console.log("Err: ",err," Gist: ",gist);

            var snippet = gist.files['snippet.js'].content;
            var readme = gist.files['README'].content;

            var readme_firstline = readme.split('\n')[0].substring(1);

            readme = gist.files['README'].content.split('\n').splice(1,2).join('\n');

    //        snippet = snippet.split("\n").slice(1).join("\n");

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
        //});
    })
}
