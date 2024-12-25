export const Loader = () => {
  return (
    <div class="flex flex-auto flex-col justify-center items-center">
      <div class="flex justify-center">
        <div
          class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-primary rounded-full"
          role="status"
          aria-label="loading"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};
