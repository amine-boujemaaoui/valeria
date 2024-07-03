import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

const StripeSuccess = () => {
  return (
    <div className='h-screen'>
      <div className='mt-32 md:max-w-[50vw] mx-auto'>
        <CheckCheck className='text-green-600 w-16 h-16 mx-auto my-6' />
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>Payment Successful</h1>
          <p className='my-2 text-muted-foreground'>
            Your payment has been processed successfully.
          </p>
          <p className='my-2 text-muted-foreground'>
            Thank you for your purchase!
          </p>
          <Button className="my-8" asChild>
            <Link href='/'>Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StripeSuccess;
