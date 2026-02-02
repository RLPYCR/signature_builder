-- Create bucket for signature uploads and allow public read/write.
insert into storage.buckets (id, name, public)
values ('signatures', 'signatures', true)
on conflict (id) do update set public = true;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'storage'
      and tablename = 'objects'
      and policyname = 'Public read signatures'
  ) then
    create policy "Public read signatures"
      on storage.objects
      for select
      using (bucket_id = 'signatures');
  end if;

  if not exists (
    select 1
    from pg_policies
    where schemaname = 'storage'
      and tablename = 'objects'
      and policyname = 'Public insert signatures'
  ) then
    create policy "Public insert signatures"
      on storage.objects
      for insert
      with check (bucket_id = 'signatures');
  end if;
end $$;
