import{c as t,o as e,C as o}from"./vendor.ab54178f.js";const c={class:"markdown-body"},n=o('<h1>Checkbox 复选按钮</h1><h3>介绍</h3><p>多选按钮用于选择。</p><h3>安装</h3><pre><code class="language-ts">import { createApp } from &#39;vue&#39;;\nimport { Checkbox } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Checkbox);\n</code></pre><h2>基本用法</h2><pre><code class="language-html">&lt;nut-checkbox v-model=&quot;checkbox1&quot; label=&quot;复选框&quot;&gt;复选框&lt;/nut-checkbox&gt;\n&lt;nut-checkbox v-model=&quot;checkbox2&quot; text-position=&quot;left&quot;&gt;复选框&lt;/nut-checkbox&gt;\n</code></pre><pre><code class="language-ts">setup() {\n  return {\n    checkbox1: false,\n    checkbox2: false,\n  };\n}\n</code></pre><h2>禁用状态</h2><pre><code class="language-html">&lt;nut-checkbox v-model=&quot;checkbox3&quot; disabled&gt;未选时禁用状态&lt;/nut-checkbox&gt;\n&lt;nut-checkbox v-model=&quot;checkbox4&quot; disabled&gt;选中时禁用状态&lt;/nut-checkbox&gt;\n</code></pre><pre><code class="language-ts">setup() {\n  return {\n    checkbox3: false,\n    checkbox4: true,\n  };\n}\n</code></pre><h2>自定义尺寸</h2><pre><code class="language-html">&lt;nut-checkbox v-model=&quot;checkbox5&quot; icon-size=&quot;25&quot;&gt;自定义尺寸25&lt;/nut-checkbox&gt;\n&lt;nut-checkbox v-model=&quot;checkbox6&quot; icon-size=&quot;10&quot;&gt;自定义尺寸10&lt;/nut-checkbox&gt;\n</code></pre><pre><code class="language-ts">setup() {\n  return {\n    checkbox5: true,\n    checkbox6: false,\n  };\n}\n\n</code></pre><h2>自定义图标</h2><p>这里建议同时设置 <code>icon-name</code> 和 <code>icon-active-name</code> 属性</p><pre><code class="language-html">&lt;nut-checkbox v-model=&quot;checkbox7&quot; icon-name=&quot;checklist&quot; icon-active-name=&quot;checklist&quot;&gt;自定义图标&lt;/nut-checkbox&gt;\n</code></pre><pre><code class="language-ts">setup() {\n  return {\n    checkbox7: true,\n  };\n}\n\n</code></pre><h2>change事件</h2><p>值发生变化时，将触发change事件</p><pre><code class="language-html">&lt;nut-checkbox v-model=&quot;checkbox8&quot; @change=&quot;changeBox3&quot;&gt;change复选框&lt;/nut-checkbox&gt;\n</code></pre><pre><code class="language-ts">setup() {\n  const checkbox = ref(false);\n  const changeBox3= (checked: boolean, label: string) =&gt; {\n    console.log(&#39;change事件触发&#39; + checked, label);\n\t}  \n  return {\n    checkbox,\n    changeBox3\n  };\n}\n</code></pre><h2>checkboxGroup使用</h2><pre><code class="language-html">&lt;nut-checkboxgroup v-model=&quot;checkboxgroup1&quot;&gt;\n  &lt;nut-checkbox v-model=&quot;checkbox9&quot; label=&quot;1&quot;&gt;组合复选框&lt;/nut-checkbox&gt;\n  &lt;nut-checkbox v-model=&quot;checkbox10&quot; label=&quot;2&quot;&gt;组合复选框&lt;/nut-checkbox&gt;\n  &lt;nut-checkbox v-model=&quot;checkbox11&quot; label=&quot;3&quot;&gt;组合复选框&lt;/nut-checkbox&gt;\n  &lt;nut-checkbox v-model=&quot;checkbox12&quot; label=&quot;4&quot;&gt;组合复选框&lt;/nut-checkbox&gt;\n&lt;/nut-checkboxgroup&gt;\n</code></pre><pre><code class="language-ts">setup() {\n  return {\n    checkbox9: false,\n    checkbox10: false,\n    checkbox11: false,\n    checkbox12: false,\n    checkboxgroup1: [&#39;2&#39;, &#39;3&#39;],\n  };\n}\n</code></pre><h2>checkboxGroup 全选/取消</h2><pre><code class="language-html">&lt;nut-checkboxgroup v-model=&quot;checkboxgroup3&quot; ref=&quot;group&quot; @change=&quot;changeBox4&quot;&gt;\n  &lt;nut-checkbox v-model=&quot;checkbox15&quot; label=&quot;1&quot;&gt;组合复选框&lt;/nut-checkbox&gt;\n  &lt;nut-checkbox v-model=&quot;checkbox16&quot; label=&quot;2&quot;&gt;组合复选框&lt;/nut-checkbox&gt;\n&lt;/nut-checkboxgroup&gt;\n&lt;span class=&quot;btn&quot;&gt;\n  &lt;nut-button type=&quot;primary&quot; @click=&quot;toggleAll(true)&quot;&gt;全选&lt;/nut-button&gt;\n  &lt;nut-button type=&quot;primary&quot; @click=&quot;toggleAll(false)&quot;&gt;取消&lt;/nut-button&gt;\n&lt;/span&gt;\n</code></pre><pre><code class="language-ts">setup() {\n  const group = ref(null);\n  const changeBox4 = (label: any[]) =&gt; {\n    Toast.text(`${label.length ? &#39;全选&#39; : &#39;取消全选&#39;}`);\n  };\n\n  const toggleAll = (f: boolean) =&gt; {\n    (group.value as any).toggleAll(f);\n  };\n  return {\n    checkbox15: false,\n    checkbox16: false,\n    changeBox4: false,\n    checkbox12: false,\n    checkboxgroup3: [&#39;2&#39;],\n    group,\n    changeBox4,\n    toggleAll\n  };\n}\n</code></pre><h2>Checkbox</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>是否处于选中状态</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用选择</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>text-position</td><td>文本所在的位置，可选值：<code>left</code>,<code>right</code></td><td>String</td><td><code>right</code></td></tr><tr><td>icon-size</td><td><a href="#/icon">图标尺寸</a></td><td>String、Number</td><td><code>18</code></td></tr><tr><td>icon-name</td><td><a href="#/icon">图标名称</a>，选中前(建议和<code>icon-active-name</code>一起修改)</td><td>String</td><td><code>&#39;check-normal&#39;</code></td></tr><tr><td>icon-active-name</td><td><a href="#/icon">图标名称</a>，选中后(建议和<code>icon-name</code>一起修改)</td><td>String</td><td><code>&#39;checked&#39;</code></td></tr><tr><td>label</td><td>复选框的文本内容</td><td>String</td><td>-</td></tr></tbody></table><h2>CheckboxGroup</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前选中项的标识符，和 <code>label</code> 相对应</td><td>String</td><td>-</td></tr><tr><td>disabled</td><td>是否禁用选择,将用于其下的全部复选框</td><td>Boolean</td><td><code>false</code></td></tr></tbody></table><h2>Checkbox Event</h2><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>值变化时触发</td><td>(state, label),<code>state</code>代表当前状态，<code>label</code>表示当前选中的值</td></tr></tbody></table><h2>CheckboxGroup Event</h2><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>值变化时触发</td><td>label,<code>label</code>返回一个数组，表示当前选中项的集合</td></tr></tbody></table>',36),d={setup:o=>(o,d)=>(e(),t("div",c,[n]))};export default d;
