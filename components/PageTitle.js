/**
 * * PageTitle.js
 * Returns an h2 element with a title
 */

const PageTitle = ({ children = 'Titulo de pagina' }) => {
	return <h2 className="mb-8 text-2xl md:text-3xl font-bold text-primary">{children}</h2>;
};
export default PageTitle;
