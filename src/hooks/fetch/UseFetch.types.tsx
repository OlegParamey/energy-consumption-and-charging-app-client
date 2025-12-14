export type FetchDataReturn<DataType> = {
	data: DataType | null;
	loading: boolean;
	error: string | null;
};
