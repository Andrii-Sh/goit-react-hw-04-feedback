import PropTypes from 'prop-types';
import { SectionWrapper, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionWrapper>
    <Title>{title}</Title>
    {children}
  </SectionWrapper>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
