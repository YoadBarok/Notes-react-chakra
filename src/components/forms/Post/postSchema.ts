import * as yup from "yup";

export const postSchema = yup.object().shape({
    title: yup.string().required('Please enter a valid title').min(3, "Title must be at least 3 characters long"),
    body: yup.string().required("Please enter a post body!"),
});