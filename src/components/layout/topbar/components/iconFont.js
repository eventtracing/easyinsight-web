/* eslint-disable */
!(function (e) {
  var t,
    n,
    l,
    o,
    i,
    c,
    a,
    d =
      '<svg><symbol id="link" viewBox="0 0 1024 1024"><path d="M245.54154667 791.67488a163.84 163.84 0 0 1 0-231.66976l38.61162666-38.61162667a163.78538667 163.78538667 0 0 1 158.32405334-42.43456l-49.26122667 49.26122667c-25.66826667 1.6384-50.7904 12.17877333-70.4512 31.78496l-38.61162667 38.61162667a109.22666667 109.22666667 0 1 0 154.50112 154.44650666l38.61162667-38.61162666c19.60618667-19.60618667 30.20117333-44.78293333 31.78496-70.39658667l49.26122667-49.26122667c14.58176 54.61333333 0.43690667 115.39797333-42.43456 158.26944l-38.61162667 38.61162667a163.84 163.84 0 0 1-231.72437333 0z m270.336-502.00576a163.78538667 163.78538667 0 0 0-42.43456 158.26944l49.26122666-49.26122667c1.6384-25.66826667 12.17877333-50.7904 31.78496-70.39658666l38.61162667-38.61162667a109.22666667 109.22666667 0 1 1 154.50112 154.44650667l-38.61162667 38.61162666c-19.6608 19.6608-44.78293333 30.20117333-70.4512 31.78496l-49.26122666 49.26122667c54.66794667 14.63637333 115.45258667 0.49152 158.32405333-42.37994667l38.61162667-38.66624a163.84 163.84 0 1 0-231.72437334-231.66976l-38.61162666 38.61162667zM400.04266667 598.61674667a27.30666667 27.30666667 0 0 0 38.61162666 38.61162666l193.05813334-193.11274666a27.30666667 27.30666667 0 0 0-38.61162667-38.61162667L400.04266667 598.61674667z"  ></path></symbol><symbol id="new" viewBox="0 0 1974 1024"><path d="M236.00761934 0H1924.87619034v1024H236.00761934V592.457143L23.16190434 372.443429h212.845715V0z" fill="#FF0000" ></path><path d="M540.72076234 313.636571V731.428571h47.981714V387.949714h1.755428L828.02590434 731.428571h49.152V313.636571h-47.981714v339.968h-1.755428L591.04304734 313.636571h-50.322285z m539.355428 107.081143c-43.885714 0-78.409143 15.798857-104.155428 47.396572-25.746286 29.842286-38.034286 67.291429-38.034286 111.762285 0 49.152 12.873143 87.771429 39.789714 117.028572 25.746286 28.086857 60.854857 42.715429 104.155429 42.715428 39.204571 0 71.387429-11.702857 96.548571-33.938285 20.48-18.724571 33.938286-42.130286 40.96-71.387429h-46.811428c-7.606857 21.065143-17.554286 36.864-30.427429 47.396572-15.213714 12.288-35.693714 18.724571-60.269714 18.724571-28.672 0-51.492571-9.362286-67.876572-28.086857-16.384-18.724571-25.161143-45.056-27.501714-78.994286h238.738286c-1.170286-52.662857-12.873143-94.208-35.108572-123.465143-24.576-32.768-61.44-49.152-110.006857-49.152z m1.170286 39.204572c57.344 0 89.526857 32.182857 95.378286 97.133714h-189.001143c2.925714-29.842286 12.288-53.248 28.672-70.802286s38.034286-26.331429 64.950857-26.331428z m165.449143-31.012572L1349.68076234 731.428571h43.885714l71.387428-243.419428 70.217143 243.419428h44.470857l102.985143-302.518857h-51.492571l-74.313143 245.174857-70.217143-245.174857h-43.885714l-70.217143 245.174857-74.313143-245.174857h-51.492571z" fill="#FFFFFF" ></path></symbol></svg>',
    s = (t = document.getElementsByTagName("script"))[
      t.length - 1
    ].getAttribute("data-injectcss");
  if (s && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      // catch err
    }
  }
  function h() {
    c || ((c = !0), o());
  }
  (n = function () {
    var e,
      t,
      n,
      l,
      o,
      i = document.createElement("div");
    (i.innerHTML = d),
      (d = null),
      (e = i.getElementsByTagName("svg")[0]) &&
        (e.setAttribute("aria-hidden", "true"),
        (e.style.position = "absolute"),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = "hidden"),
        (t = e),
        (n = document.body).firstChild
          ? ((l = t), (o = n.firstChild).parentNode.insertBefore(l, o))
          : n.appendChild(t));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(n, 0)
        : ((l = function () {
            document.removeEventListener("DOMContentLoaded", l, !1), n();
          }),
          document.addEventListener("DOMContentLoaded", l, !1))
      : document.attachEvent &&
        ((o = n),
        (i = e.document),
        (c = !1),
        (a = function () {
          try {
            i.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(a, 50);
          }
          h();
        })(),
        (i.onreadystatechange = function () {
          "complete" == i.readyState && ((i.onreadystatechange = null), h());
        }));
})(window);
