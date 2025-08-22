import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// ✅ Validation Schema
const signupSchema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    alert("Signup Successful! 🎉");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-aqua-100 to-green-50 px-4"
    >
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Create Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <Input
              type="text"
              placeholder="Full Name"
              {...register("name")}
            />
            <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
          </div>

          {/* Email */}
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              {...register("email")}
            />
            <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div>
            <Input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
          </div>

          {/* Confirm Password */}
          <div>
            <Input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword?.message}</p>
          </div>

          {/* Signup Button */}
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
            Sign Up
          </Button>
        </form>

        <div className="text-center mt-4 text-sm">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-green-700 font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
