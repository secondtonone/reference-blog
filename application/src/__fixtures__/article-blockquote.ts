const articleBlockquote = /* html */`
  <blockquote>
    <p class="quote">We do have to learn how to crawl [subdomains] separately, but for the most part, that's just a formality for the first few days.</p>
    <p class="author-job">Google</p>
    <p class="author">John Mueller</p>
 </blockquote>
`;

const articleBlockquoteWithImage = /* html */`
  <div class="blockquote-image">
    <blockquote>
      <p class="quote">We do have to learn how to crawl [subdomains] separately, but for the most part, that's just a formality for the first few days.</p>
      <div>
        <figure class="easyimage ck-image-markup"><img alt="" src="https://storage.googleapis.com/semblog-prod/blog/uploads/user/82/1b/821bb1a68e5bc41a5f86c4fa76aa23a1.jpg" width="95" height=95 />
          <figcaption></figcaption>
        </figure>
        <div>
          <p class="author">John Mueller</p>
          <p class="author-job">Google</p>
        </div>
      </div>
    </blockquote>
  </div>
`;

export { articleBlockquote, articleBlockquoteWithImage };
