import React, { useState, useEffect, useRef } from 'react';
import { VStack, Input, Select, Button, Box } from '@chakra-ui/react';
import { ref, push, set } from "firebase/database";
import { database } from '../firebase';
import { toast } from 'react-toastify';
import lottie from 'lottie-web';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  stateProvince: string;
  zipPostal: string;
  country: string;
  telephone: string;
}

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    stateProvince: '',
    zipPostal: '',
    country: '',
    telephone: '',
  });

  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/21be5db3-7f2e-4406-a417-6f8d0f07b80a/EwOUhdJu9Z.json'
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const registrationsRef = ref(database, 'registrations');
      const newRegistrationRef = push(registrationsRef);
      await set(newRegistrationRef, {
        ...formData,
        timestamp: new Date().toISOString(),
      });
      
      toast.success("Thagatchari Mayam Yaifa Minarase.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        stateProvince: '',
        zipPostal: '',
        country: '',
        telephone: '',
      });
    } catch (error) {
      console.error('Error adding registration: ', error);
      toast.error('Unable to submit form. Please try again.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} bg="#1E2329" p={0} borderRadius="lg" width="100%" maxWidth="100%" margin="auto">
      <VStack spacing={4} align="stretch">
        <div ref={animationContainer} style={{ width: '100%', height: '200px' }} />
        <Input
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          bg="#2C2C2C"
          border="none"
          color="white"
        />
        <Input
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          bg="#2C2C2C"
          border="none"
          color="white"
        />
        <Input
          placeholder="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          bg="#2C2C2C"
          border="none"
          color="white"
        />
        <Input
          placeholder="Address Line 1"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleChange}
          bg="#2C2C2C"
          border="none"
          color="white"
        />
        <Input
          placeholder="Address Line 2"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleChange}
          bg="#2C2C2C"
          border="none"
          color="white"
        />
        <Input
          placeholder="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          bg="#2C2C2C"
          border="none"
          color="white"
        />
        <Input
          placeholder="State / Province"
          name="stateProvince"
          value={formData.stateProvince}
          onChange={handleChange}
          bg="#2C2C2C"
          border="none"
          color="white"
        />
        <Input
          placeholder="ZIP / Postal"
          name="zipPostal"
          value={formData.zipPostal}
          onChange={handleChange}
          bg="#2C2C2C"
          border="none"
          color="white"
        />
        <Select
          placeholder="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          bg="#2C2C2C"
          border="none"
          color="white"
        >
          <option value="India">India</option>
        </Select>
        <Input
          placeholder="Telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          bg="#2C2C2C"
          border="none"
          color="white"
        />
        <Button type="submit" colorScheme="blue" size="lg" width="100%" color="white">
          SUBMIT
        </Button>
      </VStack>
    </Box>
  );
};
