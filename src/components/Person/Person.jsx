/* eslint-disable no-undef */
export const Person = ({ name, age, partner }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    {age ? <p className="Person__age">{`I am ${age}`}</p> : Null}
    {isMarried ? (
      <p className="Person__partner">
        {`${partner} is my {
      person.sex === 'm' ? 'wife' : 'nusband'}`}
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);
