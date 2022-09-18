import json
  
f = open('python-inter/sets/nyc_jobs.json')
nyc_jobs = json.load(f)

# Ex 1:
def find_jobs_by_word(word):
    return [job for job in nyc_jobs if word in (job.get("job_description"))]

print(len(find_jobs_by_word("experience"))) # 165

def find_agencies_by_location_job_offer(location):
    return set([job.get("agency") for job in nyc_jobs if location in job["work_location"]])

def find_agencies_by_entry_level_job_offer(level):
    return set([job.get("agency") for job in nyc_jobs if level == job.get("career_level")])


def junior_jobs_in_brooklin():
    return find_agencies_by_location_job_offer("Broadway") & find_agencies_by_entry_level_job_offer("Entry-Level")


print(junior_jobs_in_brooklin())


def max_hourly_salary():
    return max(set([job["salary_range_to"] for job in nyc_jobs if (job["salary_frequency"] == "Hourly" and job["career_level"] != "Entry-Level")]))

print(max_hourly_salary())


def salaries_in_range():
    return set([job.get("agency") for job in nyc_jobs if float(job["salary_range_from"]) >= 17 and float(job["salary_range_to"]) <= 18])

print(salaries_in_range())

