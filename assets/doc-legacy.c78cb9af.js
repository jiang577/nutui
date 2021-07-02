System.register(["./vendor-legacy.da43a34b.js"],(function(t){"use strict";var e,d,o;return{setters:[function(t){e=t.c,d=t.o,o=t.C}],execute:function(){const r={class:"markdown-body"},u=o('<h1>Price 商品价格</h1><h3>介绍</h3><p>用来对商品价格数值的小数点前后部分应用不同样式，还支持人民币符号、千位分隔符、设置小数点位数等功能。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Price } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Price);\n\n</code></pre><h2>代码示例</h2><h3>基本用法</h3><pre><code class="language-html">&lt;nut-price :price=&quot;1010&quot; :need-symbol=&quot;false&quot; :thousands=&quot;true&quot; /&gt;\n</code></pre><h3>有人民币符号，无千位分隔</h3><pre><code class="language-html">&lt;nut-price :price=&quot;10010.01&quot; :need-symbol=&quot;true&quot; :thousands=&quot;false&quot; /&gt;\n</code></pre><h3>带人民币符号，有千位分隔，保留小数点后三位</h3><pre><code class="language-html">&lt;nut-price :price=&quot;15213.1221&quot; :decimal-digits=&quot;3&quot; :need-symbol=&quot;true&quot; :thousands=&quot;true&quot; /&gt;\n</code></pre><h3>异步随机变更</h3><pre><code class="language-html">&lt;nut-price :price=&quot;price&quot; :decimal-digits=&quot;3&quot; :need-symbol=&quot;true&quot; :thousands=&quot;true&quot; /&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n    const price = ref(0);\n    setInterval(() =&gt; {\n        price.value = Math.random()*10000000;\n    }, 1000);\n    return {\n        price\n    };\n}\n</code></pre><h3>Prop</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>price</td><td>价格数量</td><td>Number</td><td>0</td></tr><tr><td>need-symbol</td><td>是否需要加上 symbol 符号</td><td>Boolean</td><td>true</td></tr><tr><td>symbol</td><td>符号类型</td><td>String</td><td>¥</td></tr><tr><td>decimal-digits</td><td>小数位位数</td><td>Number</td><td>2</td></tr><tr><td>thousands</td><td>是否按照千分号形式显示</td><td>Boolean</td><td>false</td></tr></tbody></table>',17);t("default",{setup:t=>(t,o)=>(d(),e("div",r,[u]))})}}}));
