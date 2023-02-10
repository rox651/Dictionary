import { AxiosError } from "axios";

const ErrorMessage = ({ message }: { message: string }) => {
   return (
      <section className="px-2">
         <div className="mx-auto max-w-7xl ">{message}</div>
      </section>
   );
};

export default ErrorMessage;
