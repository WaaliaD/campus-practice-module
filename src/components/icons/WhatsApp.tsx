export default function WhatsApp({ ...rest }: React.ComponentPropsWithRef<"svg">) {
	return (
		<a className="aspect-square" href="https://whatsapp.com">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...rest}>
				<path
					fill="currentColor"
					fillRule="evenodd"
					d="M3.87 33.39 0 45l12.6-3.315a22.012 22.012 0 0 0 10.288 2.54C35.1 44.224 45 34.324 45 22.111 45 9.9 35.1 0 22.888 0 10.676 0 .776 9.9.776 22.112c0 4.122 1.13 7.976 3.094 11.279Zm28.34-8.055s3.764 2.207 4.785 4.136c.435.82.284 1.828-.373 2.486l-1.364 1.364c-4.327 4.327-9.212 2.196-13.539-2.13l-3.954-3.955-3.955-3.955c-4.327-4.327-6.457-9.211-2.13-13.538l1.364-1.364a2.115 2.115 0 0 1 2.485-.374c1.93 1.02 4.136 4.786 4.136 4.786.486.852.54 1.879-.326 2.365 0 0-1.467 1.224-1.678 1.535-.963 1.422-.926 2.738.403 4.067l3.09 3.089 3.088 3.089c1.329 1.329 2.645 1.366 4.067.403.311-.211 1.534-1.678 1.534-1.678.486-.866 1.514-.812 2.366-.326Z"
					clipRule="evenodd"
				></path>
			</svg>
		</a>
	);
}
