import React, {useEffect} from "react";
import { Formik, useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName:"",
      email:"",
      type:"",
      comment:"",
    },
   
    onSubmit: (values) => {
      submit("url", values)
    },


    validationSchema: Yup.object({
      firstName:Yup.string().matches(/^[a-zA-Z ]*$/, "Please add a valid name").required("Required"),
      email:Yup.string().email().required("Required"),
      comment:Yup.string().min(25, "Must be 25 characters at minimum").required("Required"),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      };
    }
  },
   [response]);
  
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#658864"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form className="form" onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid = {formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input {...formik.getFieldProps("firstName")} />
         <FormErrorMessage className="error">{formik.errors.firstName}</FormErrorMessage>
                </FormControl>

              <FormControl isInvalid = {formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input {...formik.getFieldProps("email")} />
         <FormErrorMessage className="error">{formik.errors.email}</FormErrorMessage>

              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type"
                 name="type" 
                 value={formik.values.type}
                 onChange={formik.handleChange}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid = {formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  {...formik.getFieldProps("comment")}
                  height={250}
                />
                <FormErrorMessage className="error">{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button  type="submit" isLoading={isLoading} colorScheme="whiteAlpha" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;


