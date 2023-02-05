$(function () {
    var bar = '';

    bar += '<div id="menu">'
    bar += '<!--start CssMenu-->'
    bar += '<div id="cssmenu">'
        bar += '<ul>'
            bar += '<li>'
                bar += '<a href="https://marcovandervlag.github.io/oldindex">Home</a>'
bar += '                '
            bar += '</li>'
            bar += '<li><a>About me<i class="arrow"></i></a>'
                bar += '<ul class="dropdown">'
                    bar += '<li><a href="https://marcovandervlag.github.io/wie-ben-ik">Wie ben ik</a></li>'
                    bar += '<li>'
                        bar += '<a>Certificaten<i class="arrow"></i></a>'
                        bar += '<ul class="dropdown">'
                            bar += '<li><a href="https://marcovandervlag.github.io/pythoncert">Python</a></li>'
                            bar += '<li><a href="https://marcovandervlag.github.io/javacert">Java</a></li>'
                            bar += '<li><a href="https://marcovandervlag.github.io/communicatie">Communicatie</a></li>'
                            bar += '<li><a href="https://marcovandervlag.github.io/htmlcert">HTML</a></li>'
                            
                        bar += '</ul>'
                    bar += '</li>'
bar += '    '
                bar += '</ul></li>'
                bar += '<li><a>Projecten<i class="arrow"></i></a>'
                bar += '<ul class="dropdown">'
                
                
                        
                
                        bar += '<li><a href="https://marcovandervlag.github.io/qr-code-generator-logo">Qr-code generator logo</a></li>'
                        bar += '<li><a href="https://marcovandervlag.github.io/weather-trough-gps">weather-trough-gps</a></li>'
                        bar += '<li><a href="https://marcovandervlag.github.io/vraagjes">Vraag voor bij de thee</a></li>'

                        
                        bar += '<li><a href="https://marcovandervlag.github.io/websiteprojects">Website projects</a></li>'
                        bar += '</ul>'
                    

            bar += '</li>'
            
            bar += '<li>'
                bar += '<li><a href="https://marcovandervlag.github.io/contact">Contact</a></li>'
                bar += '<ul class="dropdown right0">'
                    
                    
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
