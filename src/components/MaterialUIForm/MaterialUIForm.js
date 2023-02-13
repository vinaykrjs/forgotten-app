// import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from '@mui/material/Input';

const MaterialUIForm = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: "vinay",
            lastName: "",
            phoneNumber: "",
            email: "",
            confirmEmail: "",
            password: "",
            confirmPassword: ""
        }
    });
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="firstName"
                control={control}
                render={({ field }) => <Input {...field} autoFocus={true} />}
            /><br />
            <Controller
                name="lastName"
                control={control}
                render={({ field }) => <Input {...field} error={false} />}
            /><br />
            <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => <Input {...field} />}
            /><br />
            <Controller
                name="email"
                control={control}
                render={({ field }) => <Input {...field} />}
            /><br />
            <Controller
                name="confirmEmail"
                control={control}
                render={({ field }) => <Input {...field} />}
            /><br />
            <Controller
                name="password"
                control={control}
                render={({ field }) => <Input {...field} />}
            /><br />
            <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => <Input {...field} />}
            /><br />
            <input type="submit" />
        </form>
    );
};

// import Button from '@mui/material/Button';

// function MyApp1() {
//   return (
//     <div>
//       <Button variant="contained">Hello World</Button>
//     </div>
//   );
// }

export default MaterialUIForm;