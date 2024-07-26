import type { FC, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

type Props = {
  onSubmit: (prompt: string) => void;
};
export const Chat: FC<Props> = ({ onSubmit }) => {
  const form = useForm();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get('prompt') as string);
    onSubmit(formData.get('prompt') as string);
  };
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FormField
          name="prompt"
          render={() => (
            <FormItem>
              <FormLabel htmlFor="prompt">Describe patient briefing</FormLabel>
              <FormControl>
                <Input id="prompt" name="prompt" maxLength={128} type="text" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-64 m-auto" type="submit">
          Create
        </Button>
      </form>
    </Form>
  );
};
