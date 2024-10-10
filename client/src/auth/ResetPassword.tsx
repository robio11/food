import { useState } from "react";
import { Input } from "../components/ui/input";
import { Loader2, LockKeyhole } from "lucide-react";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { Link } from "react-router-dom";

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState<string>("");
    const loading =  false;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        action=""
        className="md:border md:p-8 max-w-md border-gray-200 rounded-lg mx-4 w-full"
      >
        <div className="text-center mb-4">
          <h1 className="font-bold text-2xl">Reset Password</h1>
          <p className="text-sm text-gray-600 font-semibold">Enter your new password to reset old new</p>
        </div>
        <div className="mb-4">
          <div className="relative w-full">
            <Input
              type="password"
              placeholder="Enter your new Password"
              name="password"
              className="pl-10 focus-visible:ring-1"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          </div>
        </div>
        <div className="mb-10" >
        {loading ? (
          <Button disabled className="bg-Orange hover:bg-hoverOrange w-full">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{' '}
          </Button>
        ) : (
          <Button type="submit" className="bg-Orange hover:bg-hoverOrange w-full">
            Reset Password
          </Button>
        )}
        </div>
        <Separator/>
        <p className="mt-2 text-center font-semibold">
          Back to {""}
          <Link to="/login" className="text-blue-500" >Login</Link>
        </p>
      </form>
    </div>
  )
}

export default ResetPassword