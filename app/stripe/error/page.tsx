import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

const StripeError = () => {
  return (
    <div className='h-screen'>
      <div className='mt-32 md:max-w-[50vw] mx-auto'>
        <CheckCheck className='text-red-600 w-16 h-16 mx-auto my-6' />
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>Payment Failed</h1>
          <p className='my-2 text-muted-foreground'>
            Your payment has failed to process.
          </p>
          <p className='my-2 text-muted-foreground'>
            Please try again or contact support.
          </p>
          <Button className='my-8' asChild>
            <Link href='/'>Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StripeError;
