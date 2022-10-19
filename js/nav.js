$(function () {
    var bar = '';

    bar += '<div id="menu">'
    bar += '<!--start CssMenu-->'
    bar += '<div id="cssmenu">'
        bar += '<ul>'
            bar += '<li>'
                bar += '<a href="https://koalateen.github.io/">Home</a>'
bar += '                '
            bar += '</li>'
            bar += '<li><a>About me<i class="arrow"></i></a>'
                bar += '<ul class="dropdown">'
                    bar += '<li><a href="https://koalateen.github.io/wie-ben-ik.html">Wie ben ik</a></li>'
                    bar += '<li>'
                        bar += '<a>Certificaten<i class="arrow"></i></a>'
                        bar += '<ul class="dropdown">'
                            bar += '<li><a href="https://koalateen.github.io/pythoncert.html">Python</a></li>'
                            bar += '<li><a href="https://koalateen.github.io/javacert.html">Java</a></li>'
                            bar += '<li><a href="https://koalateen.github.io/communicatie.html">Communicatie</a></li>'
                            bar += '<li><a href="https://koalateen.github.io/htmlcert.html">HTML</a></li>'
                            
                        bar += '</ul>'
                    bar += '</li>'
bar += '    '
                bar += '</ul></li>'
            bar += '<li class="full-width">'
                bar += '<span>Projecten <i class="arrow"></i></span>'
                bar += '<div class="dropdown">'
                    bar += '<div class="clm">'
                        bar += '<h3>Python</h3>'
                        bar += '<a href="https://koalateen.github.io/Qr-code-generator.html">Qr-code generator</a>'
                        bar += '<a href="https://koalateen.github.io/qr-code-generator-logo.html">Qr-code generator logo</a>'
                        bar += '<a href="https://koalateen.github.io/weather-trough-gps.html">weather-trough-gps</a>'
                    bar += '</div>'
                    bar += '<div class="clm">'
                        bar += '<h3>Website Dev</h3>'
                        bar += '<a href="https://koalateen.github.io/websiteprojects.html">Website projects</a>'
                        bar += '<h3>JavaScript</h3>'
                        bar += '<a href="https://koalateen.github.io/javascriptpage.html">JavaScript</a>'
                        bar += '<a href="https://koalateen.github.io/javascriptpage2.html">JavaScript2</a>'
                    bar += '</div>'
                    bar += '<div class="clm">'
                        bar += '<a href="https://koalateen.github.io/img/staandik.png"><img src="https://koalateen.github.io/img/staandik.png" style="width:280px;"></a>'
                    bar += '</div>'
                bar += '</div>'
            bar += '</li>'
            bar += '<li><a href="https://koalateen.github.io/blogpost.html">Blog</a></li>'
            bar += '<li>'
                bar += '<span>Contact <i class="arrow"></i></span>'
                bar += '<ul class="dropdown right0">'
                    bar += '<li><a href="https://koalateen.github.io/socials.html">Socials</a></li>'
                    bar += '<li><a href="https://koalateen.github.io/persoonsgegevens.html">Persoonlijke gegevens</a></li>'
bar += '               '
                bar += '</ul>'
            bar += '</li>'
        bar += '</ul>'
    bar += '</div>'
    bar += '<!--end CssMenu-->'
    bar += '</div>'

    bar += '</body>'

    $("#main-bar").html(bar);

    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}
