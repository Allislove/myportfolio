import React from "react";
import './css/maintenance.css'

const Maintenance = () => {
  return (
    <article class="maintenance">
      <h1>We&rsquo;ll be back soon!</h1>
      <div>
        <p>
          Sorry for the inconvenience. We're performing some maintenance
          at the moment. If you need to you can always follow us on{" "}
          <b> <a href="https://github.com/Allislove">Github</a> </b>  for updates, otherwise
          we'll be back up shortly!
        </p>
        <p className="ar">Andrés Romaña </p>
      </div>
    </article>
  );
};

export { Maintenance };
