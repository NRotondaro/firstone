import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs';
import Layout from '../components/Layout';
import slugify from 'slugify';
import Seo from '../components/SEO';

const RecipeTemplate = ({ data }) => {
  const { title, cookTime, content, prepTime, servings, image } = data.contentfulRecipe;
  const pathToImage = getImage(image);
  const { tags, instructions, ingredients, tools } = content;
  return (
    <Layout>
      <Seo title={title} />
      <main className='page'>
        <div className='recipe-page'>
          <section className='recipe-hero'>
            <GatsbyImage image={pathToImage} alt={title} className='about-img' />
            <article className='recipe-info'>
              <h2>{title}</h2>
              <p>
                Tattooed you probably haven't heard of them everyday carry truffaut, waistcoat DIY
                dreamcatcher JOMO kitsch schlitz pok pok 3 wolf moon direct trade single-origin
                coffee. Taxidermy forage snackwave meditation normcore williamsburg sustainable
                organic. Kogi raclette food truck locavore PBR&B cornhole meditation squid chambray
                celiac cred brunch mukbang tumeric. Biodiesel hexagon hashtag cloud bread, pour-over
                franzen flexitarian JOMO 90's.
              </p>
              <div className='recipe-icons'>
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings}</p>
                </article>
              </div>
              <p className='recipe-tags'>
                Tags:{' '}
                {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true });
                  return (
                    <Link to={`/tags/${slug}`} key={index}>
                      {tag}
                    </Link>
                  );
                })}
              </p>
            </article>
          </section>
          <section className='recipe-content'>
            <article className='first-column'>
              <h4>instructions</h4>
              {instructions.map((instruction, index) => {
                return (
                  <div key={index} className='single-instruction'>
                    <header>
                      <p>step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{instruction}</p>
                  </div>
                );
              })}
            </article>
            <article className='second-column'>
              <div>
                <h4>ingredients</h4>
                {ingredients.map((ingredient, index) => {
                  return (
                    <div key={index}>
                      <p className='single-ingredient'>{ingredient}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((tool, index) => {
                  return (
                    <div key={index}>
                      <p className='single-tool'>{tool}</p>
                    </div>
                  );
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;

export default RecipeTemplate;
