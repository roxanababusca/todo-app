import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {

  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_ID);

  if (state.succeeded) {
      return <p className="text-lg mt-10">Thanks for reaching out! 🥳</p>;
  }

  return (
      <form onSubmit={handleSubmit} className="w-full">
        <div>
		  <label className="block font-medium" htmlFor="name">
			Name
		  </label>
		  <input
		 	id="name"
			type="text"
			name="name"
			placeholder="Aida Sage"
            required={true}
			/>
            <ValidationError 
            prefix="name" 
            field="name"
            errors={state.errors}
            />
		</div>
        <div>
			<label className="block font-medium mb-2" htmlFor="email">
			Email
			</label>
			<input
			id="email"
			type="email"
			name="email"
			placeholder="aidasage@example.com"
            required={true}
			/>
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        	/>
		</div>
        <div>
			<label className="block font-medium mb-2" htmlFor="email">
			Message
			</label>
			<textarea
			id="message"
			type="textarea"
			name="message"
            rows="6"
			placeholder="Type your question or suggestion here"
            required={true}
			/>
            <ValidationError 
            refix="Message" 
            field="message"
            errors={state.errors}
        	/>
		</div>
        <div className="flex items-center justify-center">
		<button
		  className="border border-zinc-200 font-mediumrounded hover:text-slate-900 hover:bg-gradient-to-r hover:from-green-300 hover:via-blue-400 hover:to-purple-500 hover:border-violet-900"
		  type="submit" disabled={state.submitting}
		>
		Submit
		</button>
		</div>
    </form>
  );
}

