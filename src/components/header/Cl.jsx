
import CV from '../../assets/CV.pdf';

const Cl = () => {
  return (
    <div className="mt-10 flex gap-5 justify-center">
      <a href={CV} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Let&apos;s Connect</a>
    </div>
  );
};

export default Cl;
