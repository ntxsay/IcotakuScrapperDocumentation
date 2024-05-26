import '../styles/components/quote.scss';

interface QuoteProps {
    content: JSX.Element | string;
}

const QuoteComponent = ({content } : QuoteProps) => {
    return (
        <blockquote className="quote-container">
            <p>{content}</p>
        </blockquote>
    );
}

export default QuoteComponent;