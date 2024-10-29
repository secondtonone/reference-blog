const articleCodeBlock = /* html */`
  <div class="b-blog__code">
    <code class="b-blog__code__code">&lt;h1&gt;Here&nbsp;is&nbsp;an&nbsp;H1&nbsp;tag&lt;/h1&gt;</code>
  </div>
`;

const articleCodeBlockJS = /* html */`
  <div class="b-blog__code">
    <code class="b-blog__code__code">function checkParent (src, dest) { 
    while (src) { 
      if (src.tagName === dest) return src.parentElement; 
    } 
    return null; 
  }</code>
  </div>
`;

export { articleCodeBlock, articleCodeBlockJS };
