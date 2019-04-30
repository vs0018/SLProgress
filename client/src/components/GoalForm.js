import React, { Component } from 'react';
import { Form, Field } from 'react-final-form'

class GoalForm extends Component {
  onSubmit = async goal => {
    console.log("in onSubmit");
    console.log("here is the event", goal);
  };

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <Field name="attending" validate={required}>
              {({ input, meta }) => (
                <Row>
                  <Col sm={3}>
                    <Label>
                      Will you be attending the Meryl Streep Halloween party?*
                    </Label>
                  </Col>
                  <Col sm={3}>
                    <select {...input}>
                      <option />
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </Col>
                  <Col sm={3} className="errors">
                    {meta.touched && meta.error && <span> {meta.error} </span>}
                  </Col>
                </Row>
              )}
            </Field>
            <CostumeCondition when="attending" is="yes">
              <Field
                name="merylCharacter"
                validate={composeValidators(required, merylCostume)}
              >
                {({ input, meta }) => (
                  <Row>
                    <Col sm={3}>
                      <Label>
                        Which Meryl Streep character will you be dressing up
                        as?*
                      </Label>
                    </Col>
                    <Col sm={3}>
                      <textarea {...input} />
                    </Col>
                    <Col sm={3} className="errors">
                      {meta.touched &&
                        meta.error && <span> {meta.error} </span>}
                    </Col>
                  </Row>
                )}
              </Field>
            </CostumeCondition>
            <Field name="food">
              {({ input, meta }) => (
                <Row>
                  <Col sm={3}>
                    <Label>What snack can you bring to share?</Label>
                  </Col>
                  <Col sm={3}>
                    <textarea {...input} />
                  </Col>
                </Row>
              )}
            </Field>
            <Row>
              <Col sm={3}>
                <button type="submit" disabled={pristine || invalid}>
                  Submit
                </button>
              </Col>
            </Row>
          </form>
        )}
      />
    );
  }
}

export default GoalForm;