import type { FC, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { Form, FormItem, FormField, FormLabel, FormControl } from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type Props = {
  onSubmit: (prompt: string) => void;
  loading: boolean;
};
export const Chat: FC<Props> = ({ onSubmit, loading }) => {
  const form = useForm();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
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
                <Input
                  placeholder="Type a brief..."
                  id="prompt"
                  name="prompt"
                  maxLength={256}
                  type="text"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button disabled={loading} className="w-64 m-auto" type="submit">
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Create'}
        </Button>
      </form>
    </Form>
  );
};
