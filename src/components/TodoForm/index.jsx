import { ErrorMessage, Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { TODO_VALIDATION_SCHEMA } from "../../utils/validationsSchemas";
import { createTodo } from "./../../store/slices/todoSlice";
import styles from "./TodoForm.module.sass";

function TodoForm({ create }) {
  const initialValues = { newTodo: "" };

  const submitHandler = (values, { resetForm }) => {
    create(values);
    resetForm();
  };

  return (
    <section className={styles.containerForm}>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={TODO_VALIDATION_SCHEMA}
      >
        <Form>
          <label className={styles.inputForm}>
            <span className={styles.nameForm}>New Todo:</span>
            <Field
              type="text"
              name="newTodo"
              autoFocus
              className={styles.input}
            />
            <button type="submit" className={styles.btnAdd}>
              Add
            </button>
            <ErrorMessage
              name="newTodo"
              component="div"
              className={styles.errMsg}
            />
          </label>
        </Form>
      </Formik>
    </section>
  );
}
const mapDispachToProps = (dispach) => ({
  create: (values) => dispach(createTodo(values)),
});
export default connect(null, mapDispachToProps)(TodoForm);
