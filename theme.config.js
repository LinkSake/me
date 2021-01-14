const YEAR = (new Date).getFullYear()

export default {
  footer: <small style={{ display: 'block', marginTop: '8rem' }}>
    Luis Angel Ortega © <time>{YEAR}</time>
    <style jsx>{`
      @media screen and (max-width: 480px) {
        article { 
          padding-top: 2rem;
          padding-bottom: 4rem;
        }
      }
    `}</style>
  </small>
}