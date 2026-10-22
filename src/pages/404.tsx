import React from 'react';
import Layout from "../components/layout";

export default function NotFoundPage() {
  return (
      <Layout>
      <section>
        <div className="container">
          <div className="row rounded bg-white mb-2">
            <div className="col-12 mt-2">
              <h3>404 page not found</h3>
              <p>We are sorry but the page you are looking for does not exist.</p>
            </div>
          </div>
        </div>
      </section>
      </Layout>
  );
}
